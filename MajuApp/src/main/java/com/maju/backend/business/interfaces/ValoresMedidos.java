package com.maju.backend.business.interfaces;

import java.util.Date;

public class ValoresMedidos {
	
	private Integer id;
	private String uv;
	private String chuva;
	private String temperatura;
	private String umidade;
	private String localizacao;
	private String data;
	private String hora;
	private Date createS;
	
	//	Getters and Setters
	
	
	public String getUv() {
		return uv;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
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

	public Date getCreateS() {
		return createS;
	}

	public void setCreateS(Date createS) {
		this.createS = createS;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}

	public String getHora() {
		return hora;
	}

	public void setHora(String hora) {
		this.hora = hora;
	}

	@Override
	public String toString() {
		return "ValoresMedidos [" + (id != null ? "id=" + id + ", " : "") + (uv != null ? "uv=" + uv + ", " : "")
				+ (chuva != null ? "chuva=" + chuva + ", " : "")
				+ (temperatura != null ? "temperatura=" + temperatura + ", " : "")
				+ (umidade != null ? "umidade=" + umidade + ", " : "")
				+ (localizacao != null ? "localizacao=" + localizacao + ", " : "")
				+ (data != null ? "data=" + data + ", " : "") + (hora != null ? "hora=" + hora + ", " : "")
				+ (createS != null ? "createS=" + createS : "") + "]";
	}

}
