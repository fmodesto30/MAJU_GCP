package com.maju.backend.business.interfaces;

public class ValoresMedidos {
	
	private String uv;
	private String chuva;
	private String temperatura;
	private String umidade;
	
	public String getUv() {
		return uv;
	}
	
	public void setUv(String uv) {
		this.uv = uv;
	}
	
	public String getChuva() {
		return chuva;
	}
	
	public void setChuva(String chuva) {
		this.chuva = chuva;
	}
	
	public String getTemperatura() {
		return temperatura;
	}
	
	public void setTemperatura(String temperatura) {
		this.temperatura = temperatura;
	}
	
	
	public String getUmidade() {
		return umidade;
	}

	public void setUmidade(String umidade) {
		this.umidade = umidade;
	}

	@Override
	public String toString() {
		return "ValoresMedidos [uv=" + uv + ", chuva=" + chuva + ", temperatura=" + temperatura + ", umidade=" + umidade
				+ "]";
	}

}
