export default function Test() {
	return (
		<main>
			<form action={"/api"} method="post" encType="application/json">
				<label htmlFor="image">File</label>
				<input type="file" accept=".png,.jpg,.jpeg" id="image" name="image" />
				<button>Upload</button>
			</form>
		</main>
	)
}