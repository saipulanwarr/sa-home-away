import React from "react";

import FormInput from "@/components/form/FormInput";
import FormContainer from "@/components/form/FormContainer";
import { createPropertyAction } from "@/utils/actions";
import { SubmitButton } from "@/components/form/Buttons";
import PriceInput from "@/components/form/PriceInput";
import CategoriesInput from "@/components/form/CategoriesInput";

function CreatePropertyPage() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-8 capitalize">
        create property
      </h1>
      <div className="border p-8 rounded">
        <h3 className="text-lg mb-4 font-medium">General Info</h3>
        <FormContainer action={createPropertyAction}>
          <div className="grid md:grid-cols-2 gap-8 mb-4">
            <FormInput
              name="name"
              type="text"
              label="name (20 limit)"
              defaultValue="Cabin in latvia"
            />
            <FormInput
              name="tagline"
              type="text"
              label="tagline (30 limit)"
              defaultValue="Dream gateway awaits you here"
            />
            <PriceInput />
            <CategoriesInput />
          </div>
          <SubmitButton size="lg" text="create rental" className="mt-12" />
        </FormContainer>
      </div>
    </section>
  );
}

export default CreatePropertyPage;
