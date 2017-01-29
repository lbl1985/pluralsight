class Experience:
	__domain = None
	__years = None
	__projects = None

	def __init__(self, domain, years, projects = []):
		self.domain = domain
		self.years = years
		self.projects = projects

	#
	# PROPERTIES
	#

	@property
	def domain(self):
		return self.domain

	@domain.setter
	def domain(self, value):
		self.__domain = value

	@property
	def years(self):
		return self.__years

	@years.setter
	def years(self, value):
		self.__years = value

	@property
	def projects(self):
		return self.__projects

	@projects.setter
	def projects(self, value):
		self.__projects = value

	#
	# METHODS
	#

	def serialize(self):
		return {
			"domain": self.__domain,
			"years": self.__years,
			"projects": [prj.serialize() for prj in self.projects]
		}
