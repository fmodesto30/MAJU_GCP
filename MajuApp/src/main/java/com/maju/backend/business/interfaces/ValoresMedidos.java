package com.maju.backend.business.interfaces;

public class ValoresMedidos {
	
	private String uv;
	private String chuva;
	private String temperatura;
	private String umidade;
	private String localizacao;
	
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

	public String getLocalizacao() {
		return localizacao;
	}

	public void setLocalizacao(String localizacao) {
		this.localizacao = localizacao;
	}

	@Override
	public String toString() {
		return "ValoresMedidos [" + (uv != null ? "uv=" + uv + ", " : "")
				+ (chuva != null ? "chuva=" + chuva + ", " : "")
				+ (temperatura != null ? "temperatura=" + temperatura + ", " : "")
				+ (umidade != null ? "umidade=" + umidade + ", " : "")
				+ (localizacao != null ? "localizacao=" + localizacao : "") + "]";
	}

}
