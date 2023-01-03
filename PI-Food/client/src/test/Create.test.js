import Create from '../components/Create';

describe("Un formulario controlado con JavaScript", () => {
    it("renders form", () => {
        expect(Create.find("form").length).toBe(1);
    });
    it("renders Nombre", () => {
        expect(Create.find('input[name="name"]').length).toBe(1);
    });
    it("renders Resumen", () => {
        expect(Create.find('textarea[name="resume"]').length).toBe(1);
    });
    it("renders Healt score", () => {
        expect(Create.find('input[name="level"]').length).toBe(1);
    });
    it("renders Paso a paso", () => {
        expect(Create.find('textarea[name="instructions"]').length).toBe(1);
    });
});