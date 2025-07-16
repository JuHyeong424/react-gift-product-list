export default function useReceiverValidation(values) {
  const isSamePhoneNumber = (value: string, index: number): boolean => {
    const allPhones = values?.map((item) => item.phone);
    return allPhones?.filter((phone, i) => phone === value && i !== index).length === 0;
  };

  return {
    isSamePhoneNumber,
  };
}
