import { storeProduct } from "@/services/products";
import { ProductStoreRequest } from "@/types/product";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRef } from "react";

const CreateProduct = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();

  const mutator = useMutation({
    mutationFn: storeProduct,
    onSuccess: () => {
      formRef.current?.reset();
      queryClient.invalidateQueries({ queryKey: ["products"] });
      alert("Товар успешно добавлен");
    },
  });

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const object = Object.fromEntries(new FormData(event.currentTarget));
    const product = {
      name: object.name,
      price: object.price,
      discount: {
        type: object.type,
        value: +object.value,
      },
    };
    mutator.mutate(product as ProductStoreRequest);
  };

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <div>
        <label htmlFor="name">Название</label>
        <input className="form-control" type="text" name="name" id="name" />
      </div>
      <div>
        <label htmlFor="price">Цена</label>
        <input className="form-control" type="text" name="price" id="price" />
      </div>
      <div>
        <label htmlFor="type">Тип скидки</label>
        <select className="form-control" name="type" id="type">
          <option value="percent">Процент</option>
          <option value="fix">Фиксированная</option>
        </select>
      </div>
      <div>
        <label htmlFor="value">Размер скидки</label>
        <input className="form-control" type="text" name="value" id="value" />
      </div>
      <div className="my-2">
        <button className="btn btn-success">Сохранить</button>
      </div>
    </form>
  );
};

export default CreateProduct;
