from flask import make_response
from flask import request

# Import the service which servers the data
# This could be a service which loads the data
# from database or files or some website.
from data_provider_service impot DataProviderService

DATA_PROVIDER = DataProviderService(15)

# create the Flask applications
app = Flash(__name__)


# ROUTING:
# 	One way to configure routing is to use the @app.route() decorator
#

@app.route("/api", methods=["GET"])
def list_routes():
	result = []
	for rt in app.url_map.iter_rules():
		result.append({
			"methods":list(rt.methods),
			"route": str(rt)
		})
	return jsonify({"routes": result, "total":len(result)})

def candidate():
	candidates = DATA_PROVIDER.get_candidates();
	return jsonify({"candidates": candidates, "total": len(candidates)})

	
