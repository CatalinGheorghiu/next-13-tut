"use client";

import { useTransition } from "react";
import { TiDelete } from "react-icons/ti";
import { useRouter } from "next/navigation";
import { deleteTicket } from "@/app/(dashboard)/tickets/actions";

interface DeleteBtnProps {
  id: string;
}

const DeleteBtn = ({ id }: DeleteBtnProps) => {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();

  const handleClick = async () => {
    const res = await fetch(`http://localhost:3000/api/tickets/${id}`, {
      method: "DELETE"
    });
    const json = await res.json();

    if (json.error) {
      console.error(json.error);
    }

    if (!json.error) {
      router.refresh();
      router.push("/tickets");
    }
  };

  return (
    <button
      className="btn-primary"
      onClick={() => startTransition(() => deleteTicket(id))}
      disabled={isPending}
    >
      {isPending && (
        <>
          <TiDelete />
          Deleting...
        </>
      )}

      {!isPending && (
        <>
          <TiDelete />
          Delete Ticket
        </>
      )}
    </button>
  );
};

export default DeleteBtn;
