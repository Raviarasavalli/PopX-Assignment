

export const AccountSettings = () => {
  return (
    <div className=" h-lvh w-full md:w-1/4 m-auto bg-gray-100   shadow-md  ">
      <div className=" h-20 w-full bg-white shadow-mauve-50  ">
        <h1 className="text-xl font-medium text-gray-700 font-sans p-6">Account Settings</h1>
      </div>

      <div className="flex items-center gap-4 p-6">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?fm=jpg&q=60&w=3000&auto=format&fit=crop"
            alt="profile"
            className="h-22 w-22 rounded-full object-cover"
          />

          <div className="absolute bottom-0 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-violet-600">
            📷
          </div>
        </div>

        <div>
          <h1 className="text-lg font-medium text-gray-700 font-sans">
            Marry Doe
          </h1>

          <p className="text-sm text-gray-500 font-sans">
            marry.doe@example.com
          </p>
        </div>
      </div>
      <p className=" text-gray-800 font-sans p-3 border-b border-dashed border-gray-600" >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Asperiores amet possimus laborum placeat nostrum expedita veniam?
      </p>
      


    </div>
  )
}

